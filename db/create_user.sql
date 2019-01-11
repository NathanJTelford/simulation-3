insert into user_account(
    username,
    password,
    profile_pic
)

VALUES

(
    ${username},
    ${password},
    ${profile_pic}
)

returning *;