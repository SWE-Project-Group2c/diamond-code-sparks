'use strict'

const { sanitizeEntity } = require('strapi-utils')

module.exports = {

    /**
     * Get the students belonging to a valid classroom by code
     *
     * @return {Array<Student>}
     */
    async initJoin(ctx) {

        const { code } = ctx.params
        const { classroom } = await strapi.services.classroom.findByCode(code)

        // check if the classroom exists
        let response
        if (classroom) {
            // return the students from the classroom
            response = classroom.students.map(student => { return { 
                id: student.id, 
                name: student.name,
                character: student.character
            }})
        }

        return response
    },

    /**
     * Create a new classroom with a unqiue code
     * 
     * @param {String} name
     * @param {String} school
     *
     * @return {Classroom} 
     */
    async create(ctx) {

        // ensure request was not sent as formdata
        if (ctx.is('multipart')) return ctx.badRequest(
            'Multipart requests are not accepted!',
            { id: 'Classroom.create.format.invalid', error: 'ValidationError' }
        )

        // ensure the request has the right number of params
        const params = Object.keys(ctx.request.body).length
        if (params !== 3) return ctx.badRequest(
            'Invalid number of params!',
            { id: 'Classroom.create.body.invalid', error: 'ValidationError' }
        )

        // validate the request
        const { name, school, grade } = ctx.request.body
        if (!name || !strapi.services.validator.isInt(school) || !strapi.services.validator.isInt(grade)) return ctx.badRequest(
            'A name, school, and grade must be provided!',
            { id: 'Classroom.create.body.invalid', error: 'ValidationError' }
        )

        // ensure the school is valid
        const validSchool = await strapi.services.school.findOne({ id: school })
        if (validSchool === null) return ctx.notFound(
            'The school provided is invalid!',
            { id: 'Classroom.create.school.invalid', error: 'ValidationError' }
        )

        // ensure the grade is valid
        const validGrade = await strapi.services.grade.findOne({ id: grade })
        if (validGrade === null) return ctx.notFound(
            'The grade provided is invalid!',
            { id: 'Classroom.create.grade.invalid', error: 'ValidationError' }
        )

        // add a unique code to the request body
        ctx.request.body.code = await strapi.services.classroom.getUniqueCode()

        // remove private fields and return the new classroom
        const classroom = await strapi.services.classroom.create(ctx.request.body)
        return sanitizeEntity(classroom, { model: strapi.models.classroom })
    },

    /**
     * Join a classroom and create a new student session
     * 
     * @param {Integer} students
     * 
     * @return {JWT, Students}
     */
    async join(ctx) {

        // ensure request was not sent as formdata
        if (ctx.is('multipart')) return ctx.badRequest(
            'Multipart requests are not accepted!',
            { id: 'Classroom.join.format.invalid', error: 'ValidationError' }
        )

        // ensure the request has the right number of params
        const params = Object.keys(ctx.request.body).length
        if (params !== 1) return ctx.badRequest(
            'Invalid number of params!',
            { id: 'Classroom.join.body.invalid', error: 'ValidationError' }
        )

        // validate the request
        const { code } = ctx.params
        const { students } = ctx.request.body
        if(!strapi.services.validator.isIntArray(students)) return ctx.badRequest(
            'Must provide at least one integer studentId!',
            { id: 'Classroom.join.body.invalid', error: 'ValidationError'}
        )

        // ensure the code corresponds to an active classroom
        const { classroom } = await strapi.services.classroom.findByCode(code)
        if (!classroom) return ctx.notFound(
            'The code provided does not correspond to a valid classroom!',
            { id: 'Classroom.join.code.invalid', error: 'ValidationError' }
        )

        // ensure all the students belong to the classroom
        for (let student of students) {
            if (classroom.students.find(cs => cs.id === student) === undefined) return ctx.notFound(
                'One or more of the students do not belong to the classroom!',
                { id: 'Classroom.join.studentId.invalid', error: 'ValidationError' }
            )
        }

        // create a new session for the students
        const session = await strapi.services.session.create({ classroom: classroom.id, students })

        // return a jwt for future requests and the students
        return {
            jwt: strapi.plugins['users-permissions'].services.jwt.issue({
                ids: students,
                session: session.id,
                isStudent: true
            }),
            students
        }
        // this bypasses the local authentication and requires custom
        // handling of the resulting token in the permissions policy
    },

    /**
     * Update a classroom
     *
     * @param {classroom}
     * 
     * @return {classroom}
     */
    // async update(ctx) {

    //     // ensure request was not sent as formdata
    //     if (ctx.is('multipart')) return ctx.badRequest(
    //         'Multipart requests are not accepted!',
    //         { id: 'Session.create.format.invalid', error: 'ValidationError' }
    //     )

    //     // ensure the update is not to the code, classroom, or students
    //     const { code, classroom, students } = ctx.request.body
    //     if (code || classroom || students) return ctx.badRequest(
    //         'A session\'s code, classroom, and students can not be updated!',
    //         { id: 'Session.update.body.invalid', error: 'ValidationError' }
    //     )

    //     const { id } = ctx.params
    //     const { active } = ctx.request.body

    //     // when reactivating a session, get a new code
    //     // in case the original one was issued
    //     if (active && active === true) ctx.request.body.code = await strapi.services.session.getUniqueCode()

    //     // update the session
    //     // remove private fields and return the updated session
    //     let session = await strapi.services.session.update({ id }, ctx.request.body)
    //     return sanitizeEntity(session, { model: strapi.models.session })
    // },
}