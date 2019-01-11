select * from user_account
where password = ${password}
returning *;