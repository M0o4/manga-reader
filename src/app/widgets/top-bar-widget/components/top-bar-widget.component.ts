import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'widget-top-bar',
    templateUrl: './top-bar-widget.component.html',
    styleUrls: ['./top-bar-widget.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarWidgetComponent {
    protected readonly LOGO_URL: string = 'assets/top-bar/rikka-logo.webp';
}
