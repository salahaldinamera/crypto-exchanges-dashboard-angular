import {TranslateService} from "@ngx-translate/core";
import {Injectable} from "@angular/core";
import {LocalStorageService} from "../local-storage/local-storage.service";
import {AppSpace} from "../../enums/app.namespace";


/**
 * App Service
 * Includes app methods for setting the app settings
 *
 * - Init, Get and Set App Language
 * @see initAppLanguage
 * @see setAppLanguage
 * @see getAppLangauge
 */
@Injectable({providedIn: 'root'})
export class AppService {

  constructor(
    private translateService: TranslateService,
    private localStorage: LocalStorageService,
  ) {
  }

  initApp() {
    this.initAppLanguage()
  }

  initAppLanguage() {
    this.setAppLanguage(this.getLanguage());
  }

  setAppLanguage(language: string) {
    this.translateService.use(language);
    this.localStorage.setLocalStorageItem(AppSpace.LocalStorageKeysEnum.LANGUAGE, language);
  }

  getLanguage() {
    const language = this.localStorage.getLocalStorageItem(AppSpace.LocalStorageKeysEnum.LANGUAGE);
    return language === null ? AppSpace.LanguageCodesEnum.EN.toString() : language;
  }
}
