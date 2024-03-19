var motivos = [
    " Eles são perfeitos",
    "Gostam de Brincar",
    "gostam de correr",
    "As raposas são fofinhas",
      "queridonas"
  ];
  
  var imagens = [ "https://static.biologianet.com/2022/06/raposa-vermelha.jpg",
    "https://conexaoplaneta.com.br/wp-content/uploads/2023/03/raposas-british-wildlife-photography-abre-conexao-planeta.jpg",
    "https://t2.ea.ltmcdn.com/pt/posts/0/3/1/curiosidades_sobre_as_raposas_24130_orig.jpg","https://quantocustaviajar.com/blog/wp-content/uploads/2015/07/vila-raposa12.jpg"
    ,"https://tribunadejundiai.com.br/wp-content/uploads/2022/10/Filhote-de-raposa.jpg"
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }
  
  