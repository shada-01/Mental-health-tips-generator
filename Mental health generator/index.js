//console.log("Hia.Hello");
(function() {
    const menh = [
      {
        men1: "Wear that beautiful smile of yours on your amazing face",
          
        sub: "--HiHiHi :)"
      },
      {
        men1:
         "Hey! One of your companion needs a huge rest so just go have an awesome sleep",
        sub: "--Sleep is imp yk"
      },
      {
        men1:
          "Its long you didnt connect with your friends. Have a chit-chat with them, share your feelings and enjoy",
        sub: "--Great feelings last longer "
      },
      {
        men1: "Its time to cook or just swiggy your favourite meal.Have a good fill my friend",
        sub: "--Eat well"
      },
      {
        men1:
          "You can learn some yoga postures or simple exercise will do good ",
        sub: "--Physical and mental all set"
      }
    ];
  
   const btn = document.querySelector("button");
   const text =  document.querySelector("#mental");
   const subt = document.querySelector(".sub");
   btn.addEventListener("click", function() {
       let index = Math.floor(Math.random() * menh.length);
       text.textContent = menh[index].men1;
       subt.textContent = menh[index].sub;
  
   })
  })();