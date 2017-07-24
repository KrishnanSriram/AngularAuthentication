// import customHTTPFactory;
import { appConfig } from './../app.config';
import { Observable } from 'rxjs/Rx';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { ConnectionBackend, Http, RequestOptions, Response, XHRBackend, Headers } from '@angular/http';
import {Injectable} from "@angular/core";

export class CustomHTTP extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(appConfig.apiUrl + url, this.addJWT(options)).catch(this.handleError);
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(appConfig.apiUrl + url, body, this.addJWT(options)).catch(this.handleError);
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(appConfig.apiUrl + url, body, this.addJWT(options)).catch(this.handleError);
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(appConfig.apiUrl + url, this.addJWT(options)).catch(this.handleError);
    }

    addJWT(options?: RequestOptionsArgs): RequestOptionsArgs {
        options = options || new RequestOptions();
        options.headers = options.headers || new Headers();
        // add authorization header
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            options.headers.append('Authorization', 'Bearer' + currentUser.token);
        }

        return options;
    }

    private handleError(error: any) {
        if (error.status === 401) {
            window.location.href = '/login';
        }
        return Observable.throw(error._body);
    }
}

export function customHTTPFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
        return new CustomHTTP(xhrBackend, requestOptions);
    }

export let customHTTPProvider = {
    provide: Http,
    useFactory: customHTTPFactory,
    deps: [XHRBackend, RequestOptions]
};
