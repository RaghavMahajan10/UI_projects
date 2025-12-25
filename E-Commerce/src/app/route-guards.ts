import { inject } from '@angular/core';
import { CanActivateFn } from "@angular/router";
import { SellerService } from './services/seller.service';

export const sellingAuthGuard: CanActivateFn = (route, state) => {
    const sellerService = inject(SellerService);
    
    if (!sellerService.result) {
        return true;
    }
    return false;
};