import { Component, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  opts = {
    loop: false,
    renderer: "svg",
    path: "https://assets5.lottiefiles.com/packages/lf20_ochuzluk.json"
    // with LottieTransferState the same bug
    // animationData: animData
  };
  opts$ = new BehaviorSubject(this.opts);

  constructor(private ngZone: NgZone) {

    // patching the handler according to
    // https://www.npmjs.com/package/ngx-lottie#listening-to-lottie-web-events
    const origRepeat = this.repeat.bind(this);
    this.repeat = () => this.ngZone.run(() => origRepeat());
  }

  repeat() {
    console.log(123);
    this.opts$.next({ ...this.opts });

  }
}
