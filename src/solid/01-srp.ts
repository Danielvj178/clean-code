(() => {

    interface Product {
        id: number;
        name: string;
    }

    class ProductService {
        getProduct(id: number) {
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }

        saveProduct(product: Product) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product);
        }

    }

    class Mailer {
        private masterEmail: string = 'dvidal@gmail.com';

        sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
            console.log('Enviando correo a los clientes', template);
        }
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailerService: Mailer;

        constructor(productService: ProductService, mailerService: Mailer) {
            this.productService = productService;
            this.mailerService = mailerService;
        }

        loadProduct(id: number) {
            this.productService.getProduct(id);
        }

        saveProduct(product: Product) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct(product);
        }

        notifyClients() {
            this.mailerService.sendEmail(['vidal179@gmail.com'], 'to-clients');
        }

    }

    class CarBloc {
        addToCart(productId: number) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId);
        }
    }

    const productService = new ProductService();
    const mailerService = new Mailer();

    const productBloc = new ProductBloc(productService, mailerService);
    const carBloc = new CarBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    carBloc.addToCart(10);








})();