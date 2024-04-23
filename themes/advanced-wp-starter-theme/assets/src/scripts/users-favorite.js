// Da se prebaci u JS file
const button = document.getElementById('btn-save-user')

if (button) {
  button.addEventListener('click', () => {
    const user_id = button.getAttribute('data-user_id')
    const data = new FormData()

    if (!button.classList.contains('favorite-user')) {
      data.append('delete_user', 'true')
      console.log('prvi prolaz')
    } else {
      console.log('drugi prolaz')
      data.append('delete_user', 'false')
    }

    data.append('action', 'save_favorite_user')
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
        if (data.delete_user == 'true') {
          button.classList.add('favorite-user')
        } else {
          button.classList.remove('favorite-user')
        }
      })

    // AJAX FUNKCIJA
    // console.log(user_id)
  })
}

// button_load_more.addEventListener('click', () => {
//   let loader = button_load_more.getElementsByClassName('loader')[0]
//   loader.classList.remove('d-none')

//   const data = new FormData()

//   data.append('action', 'industry_blocks_load_more')
//   data.append('nonce', industry_blocks_data.nonce_industry_blocks)
//   data.append('offset', button_load_more.dataset.offset)
//   data.append('post_id', button_load_more.dataset.post_id)
//   data.append('start', button_load_more.dataset.start)
//   data.append('load_more', true)

//   // Initiating AJAX request 
//   fetch(industry_blocks_data.ajax_url, {
//     method: "POST",
//     credentials: 'same-origin',
//     body: data
//   })
//     .then((response) => response.json())
//     .then((data) => {


//       const grid_element = document.querySelector('.industry-blocks-items-' + index)

//       // create new item elements
//       let elem = document.createElement('div')
//       elem.innerHTML = data.content
//       // append elements to container
//       grid_element.append(elem)
//       // add and layout newly appended elements
//       masonry_layout.appended(elem)

//       let ajax_read_more_items = masonry.querySelectorAll(".industry-block-item-read-more")

//       ajax_read_more_items.forEach((read_more_item) => {
//         let read_more_button = read_more_item.nextElementSibling

//         if (read_more_item.scrollHeight < 200) {
//           read_more_button.classList.add('d-none')
//         }
//         if (read_more_item.getAttribute('listener') !== 'true') {
//           read_more_item.classList.add('ajax-event')
//           read_more_item.setAttribute('listener', 'true');
//           this.ajaxReadMoreTrigger(read_more_item, masonry_layout)
//         }
//       })

//       // Update start number for the next set if items
//       button_load_more.dataset.start = data.start
//       // update offset
//       button_load_more.dataset.offset = data.offset

//       console.log(data.max_pages)
//       console.log(data.offset)
//       if (data.max_pages === data.offset) {
//         button_load_more.classList.add('d-none')
//       }

//       loader.classList.add('d-none')
//     })
// })