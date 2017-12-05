exports.seed = function(knex, Promise) {
	return knex("Activity").del().then(function() {
		return knex("Activity").insert([
			{ type: "newComponent", component_id: 1, user_id: 1, owner_id: 2},
			{ type: "newComponent", component_id: 1, user_id: 1, owner_id: 3},
			{ type: "newComponent", component_id: 1, user_id: 1, owner_id: 4},
			{ type: "newComponent", component_id: 1, user_id: 1, owner_id: 5},
			{ type: "newComponent", component_id: 2, user_id: 1, owner_id: 2},
			{ type: "newComponent", component_id: 2, user_id: 1, owner_id: 3},
			{ type: "newComponent", component_id: 2, user_id: 1, owner_id: 4},
			{ type: "newComponent", component_id: 2, user_id: 1, owner_id: 5},
			{ type: "newComponent", component_id: 3, user_id: 2, owner_id: 3},
			{ type: "newComponent", component_id: 3, user_id: 2, owner_id: 4},
			{ type: "newComponent", component_id: 3, user_id: 2, owner_id: 5},
			{ type: "newComponent", component_id: 4, user_id: 2, owner_id: 3},
			{ type: "newComponent", component_id: 4, user_id: 2, owner_id: 4},
			{ type: "newComponent", component_id: 4, user_id: 2, owner_id: 5},
			{ type: "newComponent", component_id: 5, user_id: 3, owner_id: 2},
			{ type: "newComponent", component_id: 5, user_id: 3, owner_id: 4},
			{ type: "newComponent", component_id: 5, user_id: 3, owner_id: 5},
			{ type: "newComponent", component_id: 6, user_id: 3, owner_id: 2},
			{ type: "newComponent", component_id: 6, user_id: 3, owner_id: 4},
			{ type: "newComponent", component_id: 6, user_id: 3, owner_id: 5},
			{ type: "newComponent", component_id: 7, user_id: 4, owner_id: 3},
			{ type: "newComponent", component_id: 7, user_id: 4, owner_id: 5},
			{ type: "newComponent", component_id: 8, user_id: 4, owner_id: 3},
			{ type: "newComponent", component_id: 8, user_id: 4, owner_id: 5},
			{ type: "newComponent", component_id: 9, user_id: 5, owner_id: 1},
			{ type: "newComponent", component_id: 10, user_id: 5, owner_id: 1},
			{ type: "newComponent", component_id: 11, user_id: 1, owner_id: 2},
			{ type: "newComponent", component_id: 11, user_id: 1, owner_id: 3},
			{ type: "newComponent", component_id: 11, user_id: 1, owner_id: 4},
			{ type: "newComponent", component_id: 11, user_id: 1, owner_id: 5},
			{ type: "newComponent", component_id: 12, user_id: 1, owner_id: 1},
			{ type: "newComponent", component_id: 12, user_id: 1, owner_id: 2},
			{ type: "newComponent", component_id: 12, user_id: 1, owner_id: 3},
			{ type: "newComponent", component_id: 12, user_id: 1, owner_id: 4},
			{ type: "newComponent", component_id: 12, user_id: 1, owner_id: 5},
			{ type: "newComponent", component_id: 13, user_id: 2, owner_id: 3},
			{ type: "newComponent", component_id: 13, user_id: 2, owner_id: 4},
			{ type: "newComponent", component_id: 13, user_id: 2, owner_id: 5},
			{ type: "newComponent", component_id: 14, user_id: 2, owner_id: 3},
			{ type: "newComponent", component_id: 14, user_id: 2, owner_id: 4},
			{ type: "newComponent", component_id: 14, user_id: 2, owner_id: 5},
			{ type: "newComponent", component_id: 15, user_id: 3, owner_id: 2},
			{ type: "newComponent", component_id: 15, user_id: 3, owner_id: 4},
			{ type: "newComponent", component_id: 15, user_id: 3, owner_id: 5},
			{ type: "newComponent", component_id: 16, user_id: 3, owner_id: 2},
			{ type: "newComponent", component_id: 16, user_id: 3, owner_id: 4},
			{ type: "newComponent", component_id: 16, user_id: 3, owner_id: 5},
			{ type: "newComponent", component_id: 17, user_id: 4, owner_id: 3},
			{ type: "newComponent", component_id: 17, user_id: 4, owner_id: 5},
			{ type: "newComponent", component_id: 18, user_id: 4, owner_id: 3},
			{ type: "newComponent", component_id: 18, user_id: 4, owner_id: 5},
			{ type: "newComponent", component_id: 19, user_id: 5, owner_id: 1},
			{ type: "newComponent", component_id: 20, user_id: 5, owner_id: 1},

			{ type: "newVote", component_id: 1, user_id: 1, owner_id: 1},
			{ type: "newVote", component_id: 2, user_id: 1, owner_id: 1},
			{ type: "newVote", component_id: 2, user_id: 1, owner_id: 2},
			{ type: "newVote", component_id: 3, user_id: 1, owner_id: 5},
			{ type: "newVote", component_id: 4, user_id: 1, owner_id: 4},
			{ type: "newVote", component_id: 1, user_id: 2, owner_id: 1},
			{ type: "newVote", component_id: 2, user_id: 2, owner_id: 1},
			{ type: "newVote", component_id: 2, user_id: 2, owner_id: 2},
			{ type: "newVote", component_id: 3, user_id: 2, owner_id: 5},
			{ type: "newVote", component_id: 4, user_id: 2, owner_id: 4},
			{ type: "newVote", component_id: 1, user_id: 3, owner_id: 1},
			{ type: "newVote", component_id: 2, user_id: 3, owner_id: 1},
			{ type: "newVote", component_id: 2, user_id: 3, owner_id: 2},
			{ type: "newVote", component_id: 3, user_id: 3, owner_id: 5},
			{ type: "newVote", component_id: 4, user_id: 3, owner_id: 4},
			{ type: "newVote", component_id: 1, user_id: 4, owner_id: 1},
			{ type: "newVote", component_id: 2, user_id: 4, owner_id: 1},
			{ type: "newVote", component_id: 2, user_id: 4, owner_id: 2},
			{ type: "newVote", component_id: 3, user_id: 4, owner_id: 5},
			{ type: "newVote", component_id: 4, user_id: 4, owner_id: 4},

			{ type: "newVote", component_id: 5, user_id: 1, owner_id: 1},
			{ type: "newVote", component_id: 6, user_id: 1, owner_id: 2},
			{ type: "newVote", component_id: 6, user_id: 1, owner_id: 3},
			{ type: "newVote", component_id: 7, user_id: 1, owner_id: 1},
			{ type: "newVote", component_id: 7, user_id: 1, owner_id: 2},
			{ type: "newVote", component_id: 6, user_id: 2, owner_id: 2},
			{ type: "newVote", component_id: 6, user_id: 2, owner_id: 3},
			{ type: "newVote", component_id: 7, user_id: 2, owner_id: 1},
			{ type: "newVote", component_id: 7, user_id: 2, owner_id: 2},
			{ type: "newVote", component_id: 8, user_id: 2, owner_id: 1},
			{ type: "newVote", component_id: 8, user_id: 2, owner_id: 2},
			{ type: "newVote", component_id: 8, user_id: 2, owner_id: 3},
			{ type: "newVote", component_id: 8, user_id: 2, owner_id: 4},
			{ type: "newVote", component_id: 8, user_id: 2, owner_id: 5},
			{ type: "newVote", component_id: 5, user_id: 3, owner_id: 1},
			{ type: "newVote", component_id: 6, user_id: 3, owner_id: 2},
			{ type: "newVote", component_id: 6, user_id: 3, owner_id: 3},
			{ type: "newVote", component_id: 8, user_id: 3, owner_id: 1},
			{ type: "newVote", component_id: 8, user_id: 3, owner_id: 2},
			{ type: "newVote", component_id: 8, user_id: 3, owner_id: 3},
			{ type: "newVote", component_id: 8, user_id: 3, owner_id: 4},
			{ type: "newVote", component_id: 8, user_id: 3, owner_id: 5},
			{ type: "newVote", component_id: 5, user_id: 4, owner_id: 1},
			{ type: "newVote", component_id: 7, user_id: 4, owner_id: 1},
			{ type: "newVote", component_id: 7, user_id: 4, owner_id: 2},
			{ type: "newVote", component_id: 8, user_id: 4, owner_id: 1},
			{ type: "newVote", component_id: 8, user_id: 4, owner_id: 2},
			{ type: "newVote", component_id: 8, user_id: 4, owner_id: 3},
			{ type: "newVote", component_id: 8, user_id: 4, owner_id: 4},
			{ type: "newVote", component_id: 8, user_id: 4, owner_id: 5},

			{ type: "newVote", component_id: 9, user_id: 1, owner_id: 2},
			{ type: "newVote", component_id: 10, user_id: 1, owner_id: 3},
			{ type: "newVote", component_id: 10, user_id: 1, owner_id: 4},
			{ type: "newVote", component_id: 11, user_id: 1, owner_id: 5},
			{ type: "newVote", component_id: 12, user_id: 1, owner_id: 4},
			{ type: "newVote", component_id: 9, user_id: 2, owner_id: 2},
			{ type: "newVote", component_id: 10, user_id: 2, owner_id: 3},
			{ type: "newVote", component_id: 10, user_id: 2, owner_id: 4},
			{ type: "newVote", component_id: 11, user_id: 2, owner_id: 5},
			{ type: "newVote", component_id: 12, user_id: 2, owner_id: 4},
			{ type: "newVote", component_id: 9, user_id: 3, owner_id: 2},
			{ type: "newVote", component_id: 10, user_id: 3, owner_id: 3},
			{ type: "newVote", component_id: 10, user_id: 3, owner_id: 4},
			{ type: "newVote", component_id: 11, user_id: 3, owner_id: 5},
			{ type: "newVote", component_id: 12, user_id: 3, owner_id: 4},
			{ type: "newVote", component_id: 9, user_id: 4, owner_id: 2},
			{ type: "newVote", component_id: 10, user_id: 4, owner_id: 3},
			{ type: "newVote", component_id: 10, user_id: 4, owner_id: 4},
			{ type: "newVote", component_id: 11, user_id: 4, owner_id: 5},
			{ type: "newVote", component_id: 12, user_id: 4, owner_id: 4},

			{ type: "newVote", component_id: 13, user_id: 1, owner_id: 5},
			{ type: "newVote", component_id: 14, user_id: 1, owner_id: 1},
			{ type: "newVote", component_id: 14, user_id: 1, owner_id: 2},
			{ type: "newVote", component_id: 14, user_id: 1, owner_id: 3},
			{ type: "newVote", component_id: 15, user_id: 1, owner_id: 5},
			{ type: "newVote", component_id: 13, user_id: 2, owner_id: 5},
			{ type: "newVote", component_id: 14, user_id: 2, owner_id: 1},
			{ type: "newVote", component_id: 14, user_id: 2, owner_id: 2},
			{ type: "newVote", component_id: 14, user_id: 2, owner_id: 3},
			{ type: "newVote", component_id: 15, user_id: 2, owner_id: 5},
			{ type: "newVote", component_id: 16, user_id: 3, owner_id: 1},
			{ type: "newVote", component_id: 16, user_id: 3, owner_id: 2},
			{ type: "newVote", component_id: 16, user_id: 3, owner_id: 3},
			{ type: "newVote", component_id: 16, user_id: 3, owner_id: 4},
			{ type: "newVote", component_id: 16, user_id: 3, owner_id: 5},
			{ type: "newVote", component_id: 17, user_id: 3, owner_id: 4},
			{ type: "newVote", component_id: 18, user_id: 3, owner_id: 1},
			{ type: "newVote", component_id: 16, user_id: 4, owner_id: 1},
			{ type: "newVote", component_id: 16, user_id: 4, owner_id: 2},
			{ type: "newVote", component_id: 16, user_id: 4, owner_id: 3},
			{ type: "newVote", component_id: 16, user_id: 4, owner_id: 4},
			{ type: "newVote", component_id: 16, user_id: 4, owner_id: 5},
			{ type: "newVote", component_id: 17, user_id: 4, owner_id: 4},
			{ type: "newVote", component_id: 18, user_id: 4, owner_id: 1},
			{ type: "newVote", component_id: 18, user_id: 5, owner_id: 1},
			{ type: "newVote", component_id: 19, user_id: 5, owner_id: 3},
			{ type: "newVote", component_id: 20, user_id: 5, owner_id: 1},
			{ type: "newVote", component_id: 20, user_id: 5, owner_id: 2},
			{ type: "newVote", component_id: 20, user_id: 5, owner_id: 3},
			{ type: "newVote", component_id: 20, user_id: 5, owner_id: 4},
			{ type: "newVote", component_id: 20, user_id: 5, owner_id: 5},

			{ type: "newComment", component_id: 1, user_id: 1, owner_id: 1, comment_id: 1},
			{ type: "newComment", component_id: 2, user_id: 1, owner_id: 1, comment_id: 2 },
			{ type: "newComment", component_id: 2, user_id: 1, owner_id: 2, comment_id: 2},
			{ type: "newComment", component_id: 1, user_id: 2, owner_id: 1, comment_id: 3},
			{ type: "newComment", component_id: 2, user_id: 2, owner_id: 1, comment_id: 4},
			{ type: "newComment", component_id: 2, user_id: 2, owner_id: 2, comment_id: 4},
			{ type: "newComment", component_id: 1, user_id: 3, owner_id: 1, comment_id: 5},
			{ type: "newComment", component_id: 2, user_id: 3, owner_id: 1, comment_id: 6},
			{ type: "newComment", component_id: 2, user_id: 3, owner_id: 2, comment_id: 6},
			{ type: "newComment", component_id: 1, user_id: 4, owner_id: 1, comment_id: 7},
			{ type: "newComment", component_id: 2, user_id: 4, owner_id: 1, comment_id: 8},
			{ type: "newComment", component_id: 2, user_id: 4, owner_id: 2, comment_id: 8},

			{ type: "newComment", component_id: 3, user_id: 1, owner_id: 5, comment_id: 9},
			{ type: "newComment", component_id: 4, user_id: 1, owner_id: 4, comment_id: 10},
			{ type: "newComment", component_id: 3, user_id: 2, owner_id: 5, comment_id: 11},
			{ type: "newComment", component_id: 4, user_id: 2, owner_id: 4, comment_id: 12},
			{ type: "newComment", component_id: 3, user_id: 3, owner_id: 5, comment_id: 13},
			{ type: "newComment", component_id: 4, user_id: 3, owner_id: 4, comment_id: 14},
			{ type: "newComment", component_id: 3, user_id: 4, owner_id: 5, comment_id: 15},
			{ type: "newComment", component_id: 4, user_id: 4, owner_id: 4, comment_id: 16},

			{ type: "newComment", component_id: 5, user_id: 5, owner_id: 1, comment_id: 17},
			{ type: "newComment", component_id: 6, user_id: 1, owner_id: 2, comment_id: 18},
			{ type: "newComment", component_id: 6, user_id: 1, owner_id: 3, comment_id: 18},
			{ type: "newComment", component_id: 5, user_id: 2, owner_id: 1, comment_id: 19},
			{ type: "newComment", component_id: 6, user_id: 2, owner_id: 2, comment_id: 20},
			{ type: "newComment", component_id: 6, user_id: 2, owner_id: 3, comment_id: 20},
			{ type: "newComment", component_id: 5, user_id: 3, owner_id: 1, comment_id: 21},
			{ type: "newComment", component_id: 6, user_id: 3, owner_id: 2, comment_id: 22},
			{ type: "newComment", component_id: 6, user_id: 3, owner_id: 3, comment_id: 22},
			{ type: "newComment", component_id: 5, user_id: 4, owner_id: 1, comment_id: 23},
			{ type: "newComment", component_id: 6, user_id: 4, owner_id: 2, comment_id: 24},
			{ type: "newComment", component_id: 6, user_id: 4, owner_id: 3, comment_id: 24},

			{ type: "newComment", component_id: 7, user_id: 1, owner_id: 1, comment_id: 25},
			{ type: "newComment", component_id: 7, user_id: 1, owner_id: 2, comment_id: 25},
			{ type: "newComment", component_id: 8, user_id: 1, owner_id: 1, comment_id: 26},
			{ type: "newComment", component_id: 8, user_id: 1, owner_id: 2, comment_id: 26},
			{ type: "newComment", component_id: 8, user_id: 1, owner_id: 3, comment_id: 26},
			{ type: "newComment", component_id: 8, user_id: 1, owner_id: 4, comment_id: 26},
			{ type: "newComment", component_id: 8, user_id: 1, owner_id: 5, comment_id: 26},
			{ type: "newComment", component_id: 9, user_id: 2, owner_id: 2, comment_id: 27},
			{ type: "newComment", component_id: 10, user_id: 5, owner_id: 3, comment_id: 28},
			{ type: "newComment", component_id: 10, user_id: 5, owner_id: 4, comment_id: 28},

			{ type: "newComment", component_id: 11, user_id: 1, owner_id: 5, comment_id: 29},
			{ type: "newComment", component_id: 12, user_id: 1, owner_id: 4, comment_id: 30},
			{ type: "newComment", component_id: 11, user_id: 2, owner_id: 5, comment_id: 31},
			{ type: "newComment", component_id: 12, user_id: 2, owner_id: 4, comment_id: 32},
			{ type: "newComment", component_id: 11, user_id: 3, owner_id: 5, comment_id: 33},
			{ type: "newComment", component_id: 12, user_id: 5, owner_id: 4, comment_id: 34},
			{ type: "newComment", component_id: 11, user_id: 4, owner_id: 5, comment_id: 35},
			{ type: "newComment", component_id: 12, user_id: 4, owner_id: 4, comment_id: 36},

			{ type: "newComment", component_id: 13, user_id: 1, owner_id: 5, comment_id: 37},
			{ type: "newComment", component_id: 14, user_id: 1, owner_id: 1, comment_id: 38},
			{ type: "newComment", component_id: 14, user_id: 1, owner_id: 2, comment_id: 38},
			{ type: "newComment", component_id: 14, user_id: 1, owner_id: 3, comment_id: 38},
			{ type: "newComment", component_id: 15, user_id: 2, owner_id: 5, comment_id: 39},
			{ type: "newComment", component_id: 16, user_id: 2, owner_id: 1, comment_id: 40},
			{ type: "newComment", component_id: 16, user_id: 2, owner_id: 2, comment_id: 40},
			{ type: "newComment", component_id: 16, user_id: 2, owner_id: 3, comment_id: 40},
			{ type: "newComment", component_id: 16, user_id: 2, owner_id: 4, comment_id: 40},
			{ type: "newComment", component_id: 16, user_id: 2, owner_id: 5, comment_id: 40},

			{ type: "newComment", component_id: 13, user_id: 3, owner_id: 5, comment_id: 41},
			{ type: "newComment", component_id: 14, user_id: 3, owner_id: 1, comment_id: 42},
			{ type: "newComment", component_id: 14, user_id: 3, owner_id: 2, comment_id: 42},
			{ type: "newComment", component_id: 14, user_id: 3, owner_id: 3, comment_id: 42},
			{ type: "newComment", component_id: 15, user_id: 5, owner_id: 5, comment_id: 43},
			{ type: "newComment", component_id: 16, user_id: 4, owner_id: 1, comment_id: 44},
			{ type: "newComment", component_id: 16, user_id: 4, owner_id: 2, comment_id: 44},
			{ type: "newComment", component_id: 16, user_id: 4, owner_id: 3, comment_id: 44},
			{ type: "newComment", component_id: 16, user_id: 4, owner_id: 4, comment_id: 44},
			{ type: "newComment", component_id: 16, user_id: 4, owner_id: 5, comment_id: 44},

			{ type: "newComment", component_id: 17, user_id: 1, owner_id: 4, comment_id: 45},
			{ type: "newComment", component_id: 18, user_id: 1, owner_id: 1, comment_id: 46},
			{ type: "newComment", component_id: 19, user_id: 2, owner_id: 3, comment_id: 47},
			{ type: "newComment", component_id: 20, user_id: 2, owner_id: 1, comment_id: 48},
			{ type: "newComment", component_id: 20, user_id: 2, owner_id: 2, comment_id: 48},
			{ type: "newComment", component_id: 20, user_id: 2, owner_id: 3, comment_id: 48},
			{ type: "newComment", component_id: 20, user_id: 2, owner_id: 4, comment_id: 48},
			{ type: "newComment", component_id: 20, user_id: 2, owner_id: 5, comment_id: 48},

			{ type: "newComment", component_id: 17, user_id: 3, owner_id: 4, comment_id: 49},
			{ type: "newComment", component_id: 18, user_id: 3, owner_id: 1, comment_id: 50},
			{ type: "newComment", component_id: 19, user_id: 4, owner_id: 3, comment_id: 51},
			{ type: "newComment", component_id: 20, user_id: 5, owner_id: 1, comment_id: 52},
			{ type: "newComment", component_id: 20, user_id: 5, owner_id: 2, comment_id: 52},
			{ type: "newComment", component_id: 20, user_id: 5, owner_id: 3, comment_id: 52},
			{ type: "newComment", component_id: 20, user_id: 5, owner_id: 4, comment_id: 52},
			{ type: "newComment", component_id: 20, user_id: 5, owner_id: 5, comment_id: 52},

		]);
	});
};
