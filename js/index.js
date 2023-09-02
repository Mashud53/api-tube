
const loadContents = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    const content = data.data;
    console.log(content);

    const tabContainer = document.getElementById('tab-container');
    content.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a class="tab"><button id="tab-btn" onclick = "handleLoadContent('${category.category_id}')" class="btn bg-[#FF1F3D]">${category.category}</button> </a>
        `
        tabContainer.appendChild(div);

    })


}


const cardContainer = document.getElementById('card-container')
const handleLoadContent = async (categoryId) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json();
    const cardContents = data.data;
    console.log(cardContents);

    
    cardContainer.innerHTML = "";
    cardContents.forEach((video) => {
       
    if (cardContents.length > 0) {
            console.log(cardContents)
            const div = document.createElement('div');
        div.innerHTML = `
        <div class="mt-10 card bg-base-100 shadow-xl p-3">
            <div class="max-h-36 w-full  overflow-hidden relative">
                
                <figure>
                    <img class ="w-full mx-auto overflow-hidden" src="${video.thumbnail
                }" alt=" " />
                    
                    <p class="absolute right-0 bottom-0 bg-[rgba(2,0,36,0.3143712574850299)] text-[#fafafa]">${video?.others?.posted_date}</p>
                    
                </figure>    
                
            </div>
            <div class=" flex flex-row gap-2 mt-4">
                <div class="w-[40px] h-[40px]">
                    <img class="rounded-full" src="${video.authors[0].profile_picture}" alt="">

                </div>
                <div>
                    <h2 class="card-title">"${video.title}"</h2>
                    <h3 class="my-2">${video.authors[0].profile_name}<div class="badge secondary">${video.authors[0]?.verified ? '<img src="./verified.png">' : ""}</div></h3>
                    <p>${video?.others?.views} views</p>
                </div>
                
            </div>
        </div>
        `
        cardContainer.appendChild(div);
        

        }

        else if(cardContents.length === 0){
            const div = document.createElement('div');
            div.innerHTML = `
            <div>                
                <img src="./Icon.png" alt="">
                <p>Oops!! Sorry, There is no content here</p>
            </div>
            `
            console.log(cardContents)
            cardContainer.appendChild(div);


        }

    })

}

// Blog button

const blogButton = document.getElementById('btn-blog');

blogButton.addEventListener('click', function () {
    window.location.href ="./blog/index.html";
    
    

})




loadContents();