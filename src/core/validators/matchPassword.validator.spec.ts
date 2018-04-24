import { MatchPassword } from "./matchPassword.validator"
import { AbstractControl } from "@angular/forms";


describe('GraphQLService', () => {
    it('should query', async () => {
        const AC = jasmine.createSpyObj('AbstractControl', ['a'])
        AC.value = {}
        AC.value.passphrase = 'hey'
        AC.value.recheckPassphrase = 'hey'
        expect(MatchPassword.MatchPassword(AC)).toBeNull()
 
        AC.value.passphrase = 'hey'
        AC.value.recheckPassphrase = 'he'
        expect(MatchPassword.MatchPassword(AC)).toEqual({ recheckPassphrase: true })
    })
});