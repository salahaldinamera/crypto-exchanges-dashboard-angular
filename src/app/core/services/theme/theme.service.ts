import {Inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {LocalStorageService} from "@app/core/services/local-storage/local-storage.service";
import {AppSpace} from "@app/core/enums/app.namespace";
import LocalStorageKeysEnum = AppSpace.LocalStorageKeysEnum;

@Injectable({providedIn: 'root'})
export class ThemeService {

  private isDarkMode: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private localStorageService: LocalStorageService
  ) {
    this.initTheme()
  }

  initTheme() {
    this.isDarkMode = this.localStorageService.getLocalStorageItem(LocalStorageKeysEnum.THEME) === AppSpace.ThemeEnum.DARK;
    this.injectTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.injectTheme();
  }

  isDark() {
    return this.isDarkMode;
  }

  private injectTheme() {
    const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    themeLink.href = this.isDarkMode ? 'dark-theme.css' : 'light-theme.css';
    this.localStorageService.setLocalStorageItem(AppSpace.LocalStorageKeysEnum.THEME, this.isDarkMode ? AppSpace.ThemeEnum.DARK : AppSpace.ThemeEnum.LIGHT);
  }
}
