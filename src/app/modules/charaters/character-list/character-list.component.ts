import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/modules/charaters/characters.service';
import { ICharacter } from '../characters.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})

export class CharacterListComponent {
  charcters: ICharacter[] = [];
  constructor(private readonly charactersService: CharactersService, private readonly router: Router) {}

  ngOnInit(): void {
    // load characters
    this.loadCharcters();
  }

  /**
   * load characters list
   */
  loadCharcters() {
    this.charactersService.getCharcterDetail().subscribe((data: any) => {
      if (data?.results) {
        console.log('charcters: ', data.results);
        this.charcters = (data.results)as ICharacter[];
      }
    }, (error: any) => {
      console.log('error :>> ', error);
    });
  }

  /**
   * open detail page
   * @param id character id
   */
  openDetailPage(id: number) {
    this.router.navigate(['/character-detail'], { queryParams: { 'id': id } });
  }

}