import { TestBed, async, inject } from '@angular/core/testing';
import { CommonService } from './common.service'
import { Angular2Csv } from 'angular2-csv';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(async(() => { service = new CommonService(); }));
  describe('#equalityObject', () => {
    it('should say true on equal object', async(() => {
      const testCases = [
        [{}, {}],
        [{ a: 1 }, { a: 1 }],
        [{ b: ['a', { a: 'a' }], a: 1 }, { a: 1, b: ['a', { a: 'a' }] }],
      ]
      testCases.map(test => {
        expect(service.equalityObjects(test[0], test[1])).toEqual(true)
      })
    }))
    it('should say false on different object', () => {
      const testCases = [
        [{}, { a: 'test' }],
        [{ a: 1 }, { a: 2 }],
        [{ b: ['a', { a: 'b' }], a: 1 }, { a: 1, b: ['a', { a: 'a' }] }],
        [{ b: ['a', { a: 'b' }], a: 1 }, { a: 1 }],
      ]
      testCases.map(test => {
        expect(service.equalityObjects(test[0], test[1])).toEqual(false)
      })
    })
  })
  describe('#wait', () => {
    it('wait', async () => {
      const timeout = setTimeout(_ => expect(false).toBeTruthy('timeout not triggered'), 310);
      await service.wait(300)
      clearTimeout(timeout)
    })
  })
  describe('#exportAsCSV', () => {
    it('it export', () => {
      const datatable = jasmine.createSpyObj('DatatableComponent', ['dummy'])
      datatable.columns = [
        { name: 'name', prop: 'name' },
        { prop: 'firstname', name: 'firstname' },
        { prop: 'noValue', name: 'noValue' },
        { prop: 'noName' },
        { prop: 'boolean', name: 'boolean' }
      ]

      const person1 = { name: 'Cécile', firstname: 'Ancieux', boolean: true }
      const person2 = { name: 'Guy', firstname: 'De Michelin', boolean: false }
      datatable.rows = [
        person1,
        person2
      ]
      let csv: Angular2Csv = service.exportAsCSV(datatable, 'hey')
      expect(csv['_options'].filename).toEqual('hey')

      expect(csv instanceof Angular2Csv)
      expect(csv.data[0].noValue).toEqual("")
      expect(!csv.data[0].hasOwnProperty('noName')).toEqual(true)
      expect(csv.data[0].firstname).toEqual(person1.firstname)
      expect(csv.data[0].name).toEqual(person1.name)
      expect(csv.data[0].boolean).toEqual('Oui')

      expect(csv.data[1].noValue).toEqual("")
      expect(!csv.data[1].hasOwnProperty('noName')).toEqual(true)
      expect(csv.data[1].firstname).toEqual(person2.firstname)
      expect(csv.data[1].name).toEqual(person2.name)
      expect(csv.data[1].boolean).toEqual('Non')


      csv = service.exportAsCSV(datatable)
      expect(csv['_options'].filename).toEqual('Export')
    })
  })
  describe('#flatten', () => {
    it('it flat', async () => {
      const result = service.flatten({
        a: {
          b: {
            c: 6,
            d: 'mlk'
          },
          e: [
            { c: 8 },
            { g: 'mlk' }
          ]
        }
      })
      expect(result).toEqual({
        d: 'mlk',
        c: 8,
        g: 'mlk'
      })
    })
  })
  describe('#stringifyWithoutPropertiesQuote', () => {
    it('it stringifyWithoutPropertiesQuote', async () => {
      const result = service.stringifyWithoutPropertiesQuote({
        a: {
          b: {
            c: 6,
            d: 'mlk'
          },
          e: [
            { c: 8 },
            { g: 'mlk' }
          ]
        }
      })
      expect(result).toEqual('{a:{b:{c:6,d:"mlk"},e:[{c:8},{g:"mlk"}]}}')
    })
  })
});
