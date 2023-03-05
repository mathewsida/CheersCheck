import Masonry from "masonry-layout";

window.onload = () => 
{
    const grid = dpcument.queryselector('.grid');
    const masonry = new masonry(grid, 
        {
            itemSelector: '.grid-item',
            gutter: 10, 
            originLeft: false,
            originTopl: false,
        });

            masonry.on('LayuoutComplete', () => console.log('Layout Completed'));

    };