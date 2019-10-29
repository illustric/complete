import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {
  books = [];
  singleBook;

  constructor( private route: ActivatedRoute,
    private router: Router,private Books:BooksService, private alertController: AlertController,) { }

  ngOnInit() {
    this.books = this.Books.getAllBooks();

    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('bookName');

      this.singleBook = this.books.find(obj => {
        return obj.name.includes(val);
        
      });
    });
    console.log(this.singleBook.name);
  }
  back()
  {
    this.router.navigateByUrl('/books-list');
  }
  async delet()
  {  console.log('deleteStudent', this.singleBook);

  const alert = await this.alertController.create({
    header: 'Alert',
    // subHeader: 'Subtitle',
    message: `Are you sure you want to reduce your collection ${this.singleBook.name}?`,
    // buttons: ['OK']
    buttons: [
      {
        text: 'Cancel'
      },
      {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
          this.Books.deleteBook(this.singleBook.name);
          this.router.navigateByUrl('/books-list');
        }
      }
    ]
  });

  alert.present();
}


}
