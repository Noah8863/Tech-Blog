document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function () {
      document.body.classList.remove('fade');
    }, 230);
  });
  document.body.classList.add('fade');
  
  
  const reviewHandler = async (event) => {
    event.preventDefault();
  
    const description = document.getElementById("review").value.trim();
    const title = document.getElementById("title").value.trim();
  
  
    if (description) {
      const response = await fetch("api/newpost", {
        method: "POST",
        body: JSON.stringify({ description, title}),
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      if (response.ok) {
        // document.location.replace("/");
        console.log(description);
      } else {
        alert(response.statusText);
      }
    } else {
      console.log("something went wrong");
    }
  };
  const addComment = async (event) => {
    event.preventDefault();
  };
  
  document
    .querySelector("#review-input")
    .addEventListener("submit", reviewHandler);
    
  
  //Code snippet for the navbar
  const list = document.querySelectorAll('.list');
  function activeLink() {
    list.forEach((item) =>
      item.classList.remove('active'));
    this.classList.add('active');
  }
  list.forEach((item) =>
    item.addEventListener("click", activeLink))
  
  //Five Star Rating System
  //Couldnt get this figured out in time
  
  // let totalrating = 0;
  
  // const oneStarRating = document.getElementById('1star')
  // const twoStarRating = document.getElementById('2star')
  // const threeStarRating = document.getElementById('3star')
  // const fourStarRating = document.getElementById('4star')
  // const fiveStarRating = document.getElementById('5star')
  
  
  
  // function rating1() {
  //   totalrating = 1
  //   // final()
  //   console.log(totalrating)
  //   oneStarRating.classList.add('checked')
  //   twoStarRating.classList.remove('checked')
  //   threeStarRating.classList.remove('checked')
  //   fourStarRating.classList.remove('checked')
  //   fiveStarRating.classList.remove('checked')
  // }
  
  // function rating2() {
  //   totalrating = 2
  //   // final()
  //   console.log(totalrating)
  //   oneStarRating.classList.add('checked')
  //   twoStarRating.classList.add('checked')
  //   threeStarRating.classList.remove('checked')
  //   fourStarRating.classList.remove('checked')
  //   fiveStarRating.classList.remove('checked')
  // }
  
  // function rating3() {
  //   totalrating = 3
  //   // final()
  //   console.log(totalrating)
  //   oneStarRating.classList.add('checked')
  //   twoStarRating.classList.add('checked')
  //   threeStarRating.classList.add('checked')
  //   fourStarRating.classList.remove('checked')
  //   fiveStarRating.classList.remove('checked')
  // }
  
  // function rating4() {
  //   totalrating = 4
  //   // final()
  //   console.log(totalrating)
  //   oneStarRating.classList.add('checked')
  //   twoStarRating.classList.add('checked')
  //   threeStarRating.classList.add('checked')
  //   fourStarRating.classList.add('checked')
  //   fiveStarRating.classList.remove('checked')
  // }
  
  // function rating5() {
  //   totalrating = 5
  //   // final()
  //   console.log(totalrating)
  //   oneStarRating.classList.add('checked')
  //   twoStarRating.classList.add('checked')
  //   threeStarRating.classList.add('checked')
  //   fourStarRating.classList.add('checked')
  //   fiveStarRating.classList.add('checked')
  // }
  
  // export  {totalrating};