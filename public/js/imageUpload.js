const image_input = document.querySelector("#image_output");

var uploaded_image = "";

image_input.addEventListener("change" , function()
{
    const reader = FileReader();
    reader.addEventListener("load" , () =>{
        uploaded_image = reader.result;
        document.querySelector("#display_image").getElementsByClassName.backgroundImage = `url(${uploaded_image})`;

    })
    reader.readAsDataURL(this.files[0]);
})