function likePost(button) {
    const likeCount = button.querySelector('.gallery-item-likes');
    const isLiked = button.classList.contains('liked');

    if (isLiked) {
        // Unlike post
        button.classList.remove('liked');
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
    } else {
        // Like post
        button.classList.add('liked');
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    }
}


// $(document).ready(function () {
//     $(".gallery-item-likes").on("click", function () {
//         $(".gallery-item-likes").toggleClass("red");
//         $(".gallery-item-likes").toggleClass("fa-solid");
//     });
// });

// $(document).ready(function () {
//     let lv = 0;
//     $(".gallery-item-likes").on("click", function () {

//         if (lv == 0) {
//             $('.gallery-item-likes').html(
//                 '<i class="fa-regular fa-heart"></i>');
//             lv = 1;
//         } else {
//             $('.gallery-item-likes').html(
//                 '<i class="fa-solid fa-heart" style="color: #f52e4b;"></i>');
//             lv = 0
//         }
//     });
// });