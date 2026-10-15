import {Component, inject} from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {TranslateService} from '@ngx-translate/core';

/**
 * Lets the user switch the interface language between English and Spanish.
 * @author Fabricio Flores Chavez
 */
@Component({
  selector: 'app-language-switcher',
  imports: [MatButtonToggleGroup, MatButtonToggle],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css'
})
export class LanguageSwitcher {
  private translate = inject(TranslateService);
  protected readonly languages = ['en', 'es'];

  protected get currentLanguage(): string {
    return this.translate.getCurrentLang() ?? 'en';
  }

  protected useLanguage(language: string): void {
    this.translate.use(language);
  }
}
