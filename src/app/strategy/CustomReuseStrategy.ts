import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {

    storedRouteHandles = new Map<string, DetachedRouteHandle>();

    allowRetrieveCache = {
        'search': true
    }


    shouldReuseRoute(before: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        if(this.getPath(before) === 'book-content' && this.getPath(curr) === 'search') {
            this.allowRetrieveCache['search'] = true;
        } else {
            this.allowRetrieveCache['search'] = false;
        }
        return before.routeConfig === curr.routeConfig;
    }


    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        return this.storedRouteHandles.get(this.getPath(route)) as DetachedRouteHandle;
    }


    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        const path = this.getPath(route);
        if(this.allowRetrieveCache[path]) {
            return this.storedRouteHandles.has(this.getPath(route));
        }
        return false;
    }



    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        const path = this.getPath(route);
        if(this.allowRetrieveCache.hasOwnProperty(path)) {
            return true;
        }
        return false;
    }

    store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {
        this.storedRouteHandles.set(this.getPath(route), detachedTree);
    }


    private getPath(route: ActivatedRouteSnapshot): string {
        if(route.routeConfig !== null && route.routeConfig.path !== null) {
            return route.routeConfig.path;
        }
        return '';
    }
    

    

    

    
}