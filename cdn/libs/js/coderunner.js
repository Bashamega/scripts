export const code = {
    run: {
      html(code, output) {
        output.innerHTML = code;
      }
    },
    live: {
      html(code){
        const content = document.getElementById("textarea-id").value;
    
        const blob= new Blob([content], {
            type:'text/html'

        });

        const url = URL.createObjectURL(blob);
        return url
      }
    }
  };
