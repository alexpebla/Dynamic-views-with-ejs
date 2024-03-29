const mainController = {
    
    index: (req, res) => {
      let tituloDelSitio = 'Pimienta & Sal';
      let primerParrafo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.';
      let segundoParrafo = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      res.render('index.ejs', {
        menu:menu,
        tituloDelSitio: tituloDelSitio,
        primerParrafo: primerParrafo,
        segundoParrafo: segundoParrafo
    })
    
    
    },
    detalleMenu: (req,res) => {
  
      let productoSeleccionado = menu.find(element => {
        return element.id === parseInt(req.params.id);
      })
  
      if(productoSeleccionado.descripcion === undefined) {
        productoSeleccionado.descripcion = 'Plato tipico'
      }
      res.render('detalleMenu', {
        productoSeleccionado : productoSeleccionado
      })
  
    
    }
  }
  
  
  const menu = [
    {
      id : 1,
      titulo: 'Carpaccio fresco',
      descripcion: 'Entrada Carpaccio de salmón con cítricos',
      precio: 'U$S 65.50',
    },
    {
      id: 2,
      titulo: 'Rissoto de berenjena',
      descripcion: 'Rissoto de berenjena y queso de cabra',
      precio: 'U$S 47.00'
    },
    {
      id: 3,
      titulo: 'Mousse de arroz',
      descripcion: 'Mouse de arroz con leche y armoa de azahar',
      precio: 'U$S 27.50'
    },
    {
      id: 4,
      titulo: 'Espárragos blancos',
      descripcion: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
      precio: 'U$S 37.50'
    }
    
  ]
  module.exports= mainController;