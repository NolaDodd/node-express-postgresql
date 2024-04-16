const knex = require("../db/connection");

function list() {
  return knex("comments").select("*")
}

function listCommenterCount() {
  return knex("comments as c")
    .join("users as u", "u.user_id", "c.commenter_id")
    .select("u.user_email as commenter_email")
    .count("c.comment_id as count")
    .groupBy("u.user_email")
    .orderBy("commenter_email")
    .then(result => result.map(row => (
  {commenter_email: row.user_email, count: Number(row.count)})))
}



function read(commentId) {
  // your solution here
}

module.exports = {
  list,
  listCommenterCount,
  read,
};
