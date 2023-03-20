const buttonTag = document.getElementsByTagName("button")[0];
const imgTag = document.getElementsByTagName("img")[0];
const imgTagOriginSrc = imgTag.src;

image = [
  "https://plus.unsplash.com/premium_photo-1668485967268-f757c5799b1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByZXR0eSUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1604004215402-e0be233f39be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJldHR5JTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByZXR0eSUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByZXR0eSUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1618585182794-984d23d0356d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByZXR0eSUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1620523162656-4f968dca355a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJldHR5JTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1550429365-ca98c0f9e982?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJldHR5JTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60",
];
let conter = 0;
buttonTag.addEventListener("click", () => {
  if (conter === 7) {
    conter = 0;
    imgTag.src = imgTagOriginSrc;
    return;
  }
  imgTag.src = image[conter];
  console.log(conter);
  conter++;
});
