import { Component, OnInit } from '@angular/core';
import { Tutoria } from 'src/app/model/tutoria';
import { LibraryService } from 'src/app/services/library.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-tutoria.component.html',
  styleUrls: ['./list-tutoria.component.css']
})
export class ListTutoriaComponent implements OnInit {

  tutoriaSet: Tutoria[];
  tutoriaFil: Tutoria[];
  idtutoria : string;
  collectionSize: number;
  searchTerm: string;
  closeModal: string;
  msgError = '';
  currentTutoria = null;
  currentIndex = -1;
  
  constructor(private libraryService: LibraryService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.refreshList();
  }

  search(value: string): void {
    this.tutoriaFil = this.tutoriaSet.filter((val) => val.name.toLowerCase().includes(value));
    this.collectionSize = this.tutoriaFil.length;
  }

  retrieveTutorias(): void {
    this.libraryService.getAll()
      .subscribe(
        data => {
          this.tutoriaSet = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveTutoria(val:string): void {
    this.libraryService.get(val)
      .subscribe(
        data => {
          this.currentTutoria = data;
          console.log(data);
        },
        error => {
          this.msgError =  error.message +' \n '+ error.error.message;
          console.log(error);
        });
  }

  updateTutoria(): void {
   this.libraryService.update(this.currentTutoria.id, this.currentTutoria)
      .subscribe(
        data => {
          this.refreshList();
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  deleteTutoria(val1:string): void {
    this.libraryService.delete(val1)
       .subscribe(
         data => {
           this.refreshList();
           console.log(data);
         },
         error => {
           console.log(error);
         });
   }

  setActiveTutoria(tutoria : Tutoria, index : number): void {
    this.currentTutoria = tutoria;
    this.currentIndex = index
  }

  refreshList(): void {
    this.retrieveTutorias();
  }

  //Emergent Window Edit (exit: x or esc or click backdrop)
  triggerModal(content:any, val:Tutoria) {
    this.currentTutoria = val
    this.retrieveTutoria(this.currentTutoria.isbn)
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
