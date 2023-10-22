import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { TopBarWidgetComponent } from './components/top-bar-widget.component';
import { RouterLink } from '@angular/router';

@NgModule({
    imports: [CommonModule, NgOptimizedImage, RouterLink],
    declarations: [TopBarWidgetComponent],
    exports: [TopBarWidgetComponent],
})
export class TopBarWidgetModule {}
