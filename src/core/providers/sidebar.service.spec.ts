import { TestBed, async, inject } from '@angular/core/testing';
import { SideBarService } from './sidebar.service'

describe('SidebarService', () => {
  let service: SideBarService;

  beforeEach(async(() => { service = new SideBarService(); }));

  it('should close on default value', async(() => {
    expect(service._open).toEqual(false)
  }))

  describe('#open', () => {
    it('should open', async(() => {
      service.open()
      expect(service._open).toEqual(true)
    }))
    it('should close', async(() => {
      service.close()
      expect(service._open).toEqual(false)
    }))
  })
});
