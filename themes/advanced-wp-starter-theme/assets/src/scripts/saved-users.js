const buttons = document.querySelectorAll('.close-icon')
buttons.forEach((button) => {
  console.log(button);
  // Da se prebaci u JS file
  button.addEventListener('click', () => {
    button.previousElementSibling.classList.remove("d-none")
    button.previousElementSibling.classList.add("d-block")

    console.log(button.previousElementSibling)
    const user_id = button.getAttribute('data-user_id')
    const data = new FormData()

    data.append('action', 'delete_favorite_user')
    data.append('nonce', users_favorite_data.nonce_favorite_users)
    data.append('current_user_id', users_favorite_data.current_user_id)
    data.append('user_id', user_id)
    // data.append('save_user', true)

    // console.log(users_favorite_data.nonce_favorite_users)

    fetch(users_favorite_data.ajax_url, {
      method: "POST",
      credentials: 'same-origin',
      body: data
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        button.parentElement.parentElement.classList.add("d-none")
        const count_saved_users = document.getElementById('count-saved-users')
        let updated_count = Array.from(data.get_favorite_users).length
        let count_element = count_saved_users.getElementsByClassName('count-saved-users-number')[0]

        count_element.innerHTML = updated_count
      })

  })
})


