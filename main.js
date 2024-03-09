function modifyHtml(){
    // Adding a link to my study bootcamp since I dont have a blog
    let link = document.createElement('a');
    link.href = 'https://www.hyperiondev.com/bootcamps/immersive/full-stack-web-and-software-engineer/';
    link.innerHTML = 'Current Studies: Immersive Certified Bootcamp';
    document.body.appendChild(link);

    //Resizing my image
    let img = document.querySelector('img');
    img.style.width = '100px';
    img.style.height = '100px';

    // Styling the HTML to look like a CV
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#f3f3f3';
    document.body.style.fontFamily = 'Arial, sans-serif';

    //section styling
    document.querySelectorAll('section').forEach((section) => {
        section.style.margin = '20px';
        section.style.padding = '20px';
        section.style.borderRadius = '5px';
        section.style.backgroundColor = '#fff';
        section.style.boxShadow = '0px 0px 25px 0px rgba(0,0,0,0.1)';
    });

    document.querySelector('header').style.display = 'flex';
    document.querySelector('header').style.alignItems = 'center';
    document.querySelector('header').style.justifyContent = 'space-between';
    document.querySelector('header').style.padding = '20px';
    document.querySelector('header').style.backgroundColor = '#fff';

    //h2 heading color styling
    document.querySelectorAll('h2').forEach((h2) => {
        h2.style.color = 'blue';
    });

    //h3 heading color styling
    document.querySelectorAll('h3').forEach((h3) => {
        h3.style.color = 'darkblue';
    });
}

window.onload = modifyHtml;
