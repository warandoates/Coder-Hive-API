const moment = require('moment')
const workingDate = Date.now()



exports.seed = function(knex, Promise) {
	return knex("Activity").del().then(function() {
		return knex("Activity").insert([
			{ type: "newComponent", component_id: 1, user_id: 1, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComponent", component_id: 1, user_id: 1, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComponent", component_id: 1, user_id: 1, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComponent", component_id: 1, user_id: 1, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComponent", component_id: 2, user_id: 1, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComponent", component_id: 2, user_id: 1, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComponent", component_id: 2, user_id: 1, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComponent", component_id: 2, user_id: 1, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComponent", component_id: 3, user_id: 2, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComponent", component_id: 3, user_id: 2, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComponent", component_id: 3, user_id: 2, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComponent", component_id: 4, user_id: 2, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComponent", component_id: 4, user_id: 2, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComponent", component_id: 4, user_id: 2, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComponent", component_id: 5, user_id: 3, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComponent", component_id: 5, user_id: 3, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComponent", component_id: 5, user_id: 3, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComponent", component_id: 6, user_id: 3, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComponent", component_id: 6, user_id: 3, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComponent", component_id: 6, user_id: 3, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},

            { type: "newComponent", component_id: 7, user_id: 4, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 7, user_id: 4, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 8, user_id: 4, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 8, user_id: 4, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 9, user_id: 5, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 10, user_id: 5, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 11, user_id: 1, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 11, user_id: 1, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 11, user_id: 1, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 11, user_id: 1, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 12, user_id: 1, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 12, user_id: 1, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 12, user_id: 1, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 12, user_id: 1, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 12, user_id: 1, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},

            { type: "newComponent", component_id: 12, user_id: 1, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 12, user_id: 1, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 12, user_id: 1, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 12, user_id: 1, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 12, user_id: 1, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 13, user_id: 2, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 13, user_id: 2, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 13, user_id: 2, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 14, user_id: 2, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 14, user_id: 2, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 14, user_id: 2, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 15, user_id: 3, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 15, user_id: 3, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 15, user_id: 3, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 16, user_id: 3, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 16, user_id: 3, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 16, user_id: 3, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 17, user_id: 4, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 17, user_id: 4, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 18, user_id: 4, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 18, user_id: 4, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 19, user_id: 5, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComponent", component_id: 20, user_id: 5, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},

			{ type: "newVote", component_id: 1, user_id: 1, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 2, user_id: 1, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 2, user_id: 1, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 3, user_id: 1, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 4, user_id: 1, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 1, user_id: 2, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 2, user_id: 2, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 2, user_id: 2, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 3, user_id: 2, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 4, user_id: 2, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 1, user_id: 3, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 2, user_id: 3, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 2, user_id: 3, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 3, user_id: 3, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 4, user_id: 3, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 1, user_id: 4, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 2, user_id: 4, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 2, user_id: 4, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 3, user_id: 4, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 4, user_id: 4, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},

			{ type: "newVote", component_id: 5, user_id: 1, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 6, user_id: 1, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 6, user_id: 1, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 7, user_id: 1, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 7, user_id: 1, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 6, user_id: 2, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 6, user_id: 2, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 7, user_id: 2, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 7, user_id: 2, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 8, user_id: 2, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 8, user_id: 2, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 8, user_id: 2, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 8, user_id: 2, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 8, user_id: 2, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 5, user_id: 3, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 6, user_id: 3, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 6, user_id: 3, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 8, user_id: 3, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 8, user_id: 3, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 8, user_id: 3, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 8, user_id: 3, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 8, user_id: 3, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 5, user_id: 4, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 7, user_id: 4, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 7, user_id: 4, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 8, user_id: 4, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 8, user_id: 4, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 8, user_id: 4, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 8, user_id: 4, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newVote", component_id: 8, user_id: 4, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},

            { type: "newVote", component_id: 9, user_id: 1, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 10, user_id: 1, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 10, user_id: 1, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 11, user_id: 1, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 12, user_id: 1, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 9, user_id: 2, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 10, user_id: 2, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 10, user_id: 2, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 11, user_id: 2, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 12, user_id: 2, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 9, user_id: 3, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 10, user_id: 3, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 10, user_id: 3, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 11, user_id: 3, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 12, user_id: 3, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 9, user_id: 4, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 10, user_id: 4, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 10, user_id: 4, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 11, user_id: 4, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 12, user_id: 4, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},

            { type: "newVote", component_id: 13, user_id: 1, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 14, user_id: 1, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 14, user_id: 1, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 14, user_id: 1, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 15, user_id: 1, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 13, user_id: 2, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 14, user_id: 2, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 14, user_id: 2, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 14, user_id: 2, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 15, user_id: 2, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 16, user_id: 3, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 16, user_id: 3, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 16, user_id: 3, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 16, user_id: 3, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 16, user_id: 3, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 17, user_id: 3, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 18, user_id: 3, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 16, user_id: 4, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 16, user_id: 4, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 16, user_id: 4, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 16, user_id: 4, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 16, user_id: 4, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 17, user_id: 4, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 18, user_id: 4, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 18, user_id: 5, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 19, user_id: 5, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 20, user_id: 5, owner_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 20, user_id: 5, owner_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 20, user_id: 5, owner_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 20, user_id: 5, owner_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newVote", component_id: 20, user_id: 5, owner_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},

			{ type: "newComment", component_id: 1, user_id: 1, owner_id: 1, comment_id: 1, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComment", component_id: 2, user_id: 1, owner_id: 1, comment_id: 2 , created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComment", component_id: 2, user_id: 1, owner_id: 2, comment_id: 2, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComment", component_id: 1, user_id: 2, owner_id: 1, comment_id: 3, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComment", component_id: 2, user_id: 2, owner_id: 1, comment_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComment", component_id: 2, user_id: 2, owner_id: 2, comment_id: 4, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComment", component_id: 1, user_id: 3, owner_id: 1, comment_id: 5, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComment", component_id: 2, user_id: 3, owner_id: 1, comment_id: 6, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComment", component_id: 2, user_id: 3, owner_id: 2, comment_id: 6, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComment", component_id: 1, user_id: 4, owner_id: 1, comment_id: 7, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComment", component_id: 2, user_id: 4, owner_id: 1, comment_id: 8, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComment", component_id: 2, user_id: 4, owner_id: 2, comment_id: 8, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},

			{ type: "newComment", component_id: 3, user_id: 1, owner_id: 5, comment_id: 9, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComment", component_id: 4, user_id: 1, owner_id: 4, comment_id: 10, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComment", component_id: 3, user_id: 2, owner_id: 5, comment_id: 11, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComment", component_id: 4, user_id: 2, owner_id: 4, comment_id: 12, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComment", component_id: 3, user_id: 3, owner_id: 5, comment_id: 13, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComment", component_id: 4, user_id: 3, owner_id: 4, comment_id: 14, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComment", component_id: 3, user_id: 4, owner_id: 5, comment_id: 15, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
			{ type: "newComment", component_id: 4, user_id: 4, owner_id: 4, comment_id: 16, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},

            { type: "newComment", component_id: 5, user_id: 5, owner_id: 1, comment_id: 17, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 6, user_id: 1, owner_id: 2, comment_id: 18, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 6, user_id: 1, owner_id: 3, comment_id: 18, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 5, user_id: 2, owner_id: 1, comment_id: 19, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 6, user_id: 2, owner_id: 2, comment_id: 20, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 6, user_id: 2, owner_id: 3, comment_id: 20, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 5, user_id: 3, owner_id: 1, comment_id: 21, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 6, user_id: 3, owner_id: 2, comment_id: 22, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 6, user_id: 3, owner_id: 3, comment_id: 22, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 5, user_id: 4, owner_id: 1, comment_id: 23, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 6, user_id: 4, owner_id: 2, comment_id: 24, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 6, user_id: 4, owner_id: 3, comment_id: 24, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},

            { type: "newComment", component_id: 7, user_id: 1, owner_id: 1, comment_id: 25, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 7, user_id: 1, owner_id: 2, comment_id: 25, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 8, user_id: 1, owner_id: 1, comment_id: 26, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 8, user_id: 1, owner_id: 2, comment_id: 26, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 8, user_id: 1, owner_id: 3, comment_id: 26, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 8, user_id: 1, owner_id: 4, comment_id: 26, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 8, user_id: 1, owner_id: 5, comment_id: 26, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 9, user_id: 2, owner_id: 2, comment_id: 27, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 10, user_id: 5, owner_id: 3, comment_id: 28, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 10, user_id: 5, owner_id: 4, comment_id: 28, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},

            { type: "newComment", component_id: 11, user_id: 1, owner_id: 5, comment_id: 29, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 12, user_id: 1, owner_id: 4, comment_id: 30, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 11, user_id: 2, owner_id: 5, comment_id: 31, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 12, user_id: 2, owner_id: 4, comment_id: 32, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 11, user_id: 3, owner_id: 5, comment_id: 33, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 12, user_id: 5, owner_id: 4, comment_id: 34, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 11, user_id: 4, owner_id: 5, comment_id: 35, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 12, user_id: 4, owner_id: 4, comment_id: 36, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},

            { type: "newComment", component_id: 13, user_id: 1, owner_id: 5, comment_id: 37, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 14, user_id: 1, owner_id: 1, comment_id: 38, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 14, user_id: 1, owner_id: 2, comment_id: 38, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 14, user_id: 1, owner_id: 3, comment_id: 38, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 15, user_id: 2, owner_id: 5, comment_id: 39, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 16, user_id: 2, owner_id: 1, comment_id: 40, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 16, user_id: 2, owner_id: 2, comment_id: 40, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 16, user_id: 2, owner_id: 3, comment_id: 40, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 16, user_id: 2, owner_id: 4, comment_id: 40, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 16, user_id: 2, owner_id: 5, comment_id: 40, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},

            { type: "newComment", component_id: 13, user_id: 3, owner_id: 5, comment_id: 41, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 14, user_id: 3, owner_id: 1, comment_id: 42, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 14, user_id: 3, owner_id: 2, comment_id: 42, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 14, user_id: 3, owner_id: 3, comment_id: 42, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 15, user_id: 5, owner_id: 5, comment_id: 43, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 16, user_id: 4, owner_id: 1, comment_id: 44, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 16, user_id: 4, owner_id: 2, comment_id: 44, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 16, user_id: 4, owner_id: 3, comment_id: 44, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 16, user_id: 4, owner_id: 4, comment_id: 44, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 16, user_id: 4, owner_id: 5, comment_id: 44, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},

            { type: "newComment", component_id: 17, user_id: 1, owner_id: 4, comment_id: 45, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 18, user_id: 1, owner_id: 1, comment_id: 46, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 19, user_id: 2, owner_id: 3, comment_id: 47, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 20, user_id: 2, owner_id: 1, comment_id: 48, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 20, user_id: 2, owner_id: 2, comment_id: 48, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 20, user_id: 2, owner_id: 3, comment_id: 48, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 20, user_id: 2, owner_id: 4, comment_id: 48, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 20, user_id: 2, owner_id: 5, comment_id: 48, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},

            { type: "newComment", component_id: 17, user_id: 3, owner_id: 4, comment_id: 49, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 18, user_id: 3, owner_id: 1, comment_id: 50, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 19, user_id: 4, owner_id: 3, comment_id: 51, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 20, user_id: 5, owner_id: 1, comment_id: 52, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 20, user_id: 5, owner_id: 2, comment_id: 52, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 20, user_id: 5, owner_id: 3, comment_id: 52, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 20, user_id: 5, owner_id: 4, comment_id: 52, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},
            { type: "newComment", component_id: 20, user_id: 5, owner_id: 5, comment_id: 52, created_at: moment(workingDate - (Math.random() * 5228000000)).format()},

		]);
	});
};
