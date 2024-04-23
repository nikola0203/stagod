const button = document.getElementById('btn-delete-user')

button.addEventListener('click', (e) => {
  e.preventDefault();

  const user_id = button.getAttribute('data-user_id')

  const data = new FormData()

  data.append('action', 'delete_favorite_user')
  data.append('nonce', users_favorite_data.nonce_favorite_users)
  data.append('current_user_id', users_favorite_data.current_user_id)
  data.append('user_id', user_id)

  // console.log(users_favorite_data.nonce_favorite_users)

  fetch(users_favorite_data.ajax_url, {
    method: "POST",
    credentials: 'same-origin',
    body: data
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
})