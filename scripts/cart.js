    
    // To switch between the view of empty and full cart
    function altView(){

        var fullOrder = document.getElementById('fullOrder');
        var emptyOrder = document.getElementById('emptyOrder');
        var addMore = document.getElementById('addMore');
        var startOrder = document.getElementById('startOrder');

        if(fullOrder.style.display === "none"){
            fullOrder.style.display = "block";
            emptyOrder.classList.add('hidden');
            addMore.className = addMore.className.replace("hidden", "");
            startOrder.classList.add('hidden');
        } else {
            fullOrder.style.display = "none";
            emptyOrder.className = emptyOrder.className.replace(" hidden", "");
            addMore.classList.add('hidden');
            startOrder.className = startOrder.className.replace("hidden", "");
            this.className += " hidden";
        }
    }