import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from 'src/app/modules/charaters/characters.service';
import { ICharacter } from '../characters.model';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})

export class DetailPageComponent implements OnInit {
  characterDetail: any = {};
  constructor(private readonly route: ActivatedRoute, private readonly charactersService: CharactersService, private readonly router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params.id) {
        // get charater detail
        this.charactersService.getSingleCharcterDetail(Number(params.id)).subscribe((character: any) => {
          console.log('character: ', character);
          if(character?.id){
            this.characterDetail = (character)as ICharacter;
          }
        }, (error: any) => {
          console.log('error :>> ', error);
        });
      }
    });
  }

  /**
   * go to characters screen
   */
  goBack() { this.router.navigate(['/']) }

}