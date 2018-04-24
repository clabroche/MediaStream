import { AbstractControl } from '@angular/forms';
export class MatchPassword {

    static MatchPassword(AC: AbstractControl) {
        let confirmPassword = AC.value.passphrase
        let password = AC.value.recheckPassphrase; // to get value in input tag
        if (confirmPassword !== password) {
            return {recheckPassphrase: true}
        } else return null
    }
}