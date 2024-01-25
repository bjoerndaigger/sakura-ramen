import { Component } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-LandingPage',
    standalone: true,
    imports: [NavbarComponent],
    template: `
    <section>
        <div><app-navbar></app-navbar></div>
        <div class="headline">
            <h1>SAKURA RAMEN</h1>
            <h2>THE BEST RAMEN IN TOWN</h2>
        </div>
    </section>
    `,
    styleUrl: './landingPage.component.scss'
})

export class LandingPageComponent { }


