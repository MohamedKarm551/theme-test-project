function openMenu() {
    var listStyle = document.getElementById("list").style;
    if (listStyle.display == "none") {
        // alert("aaa");
        listStyle.display = "flex";
        listStyle.position = "absolute";
        listStyle.justifyContent = "space-between";
        listStyle.width = "100%";
        listStyle.flexDirection = "column";
        listStyle.background = "#fff";
        listStyle.top = "calc(100% + 2px)";
        listStyle.right = "0";
        // header .List-items {
        //     display: flex;
        //     justify-content: space-between;
        //     width: 100%;
        //     flex-direction: column;
        //     position: absolute;
        //     background: #fff;
        //     top: calc(100% + 2px);
        //     right: 0;
        // }
    } else {
        listStyle.display = "none";
    }
}
// 
var imgArray = [
    "imgs/img1.png",
    "imgs/img2.png",
    "imgs/img3.png",
    "imgs/img4.png",
    "imgs/img5.png",
    "imgs/img6.png",
    "imgs/img7.png",
    "imgs/img8.png",
    "imgs/img9.png",
    "imgs/img10.png"
];
var paragraphList = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor justo enim, a malesuada nulla egestas sed. Suspendisse eu nibh condimentum, condimentum nisi eu, consequat lacus. Proin vel consequat urna. Vestibulum a est malesuada, commodo nisi eu, auctor tortor. Integer suscipit enim orci, nec tincidunt magna cursus a. Etiam ac venenatis leo, in aliquam arcu. […]",
    "",
    "Cras leo tortor, condimentum id semper eu, sodales id elit. Maecenas commodo dolor vel massa gravida vehicula. Morbi tristique sapien ac dui tempus imperdiet.",
    "Nulla facilisi. Morbi eu neque massa. Phasellus nec rhoncus diam. Morbi elementum ligula quis magna tristique egestas. Donec nec eros nibh, id sollicitudin mi. Mauris eget lorem sed mauris lacinia adipiscing ut id ligula.",
    "All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was this. One day when she was two years old she was playing in a garden, and she plucked another flower and ran with it to her mother.",
    "Here’s a post with some comments.",
    "Comments are disabled. This post should display no comment-reply form.",
    "This post has far too many categories.", "I never tried to prove nothing, just wanted to give a good show. My life has always been my music, it’s always come first, but the music ain’t worth nothing if you can’t lay it on the public. The main thing is to live for that audience, ’cause what you’re there for is to please the people.",
    "Praesent consectetur libero eget arcu lacinia vitae viverra risus eleifend."
];

function displayProduct() {
    var temp = "";
    for (var i = 0; i < imgArray.length; i++) {
        temp += `     <div class="product">
        <div class="product-img">
            <img src="` + imgArray[i] + `" alt="">
        </div>
        <div class="product-info">
            <h3>Random Content Experiment</h3>
            <span>October 15, 2014</span>
            <p contenteditable="true">
            ` + paragraphList[i] + `
           </p>
        </div>
    </div>`
    }
    document.getElementById("productRow").innerHTML = temp;
}

displayProduct();