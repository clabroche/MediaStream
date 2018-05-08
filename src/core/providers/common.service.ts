import { Injectable } from "@angular/core";
import * as _ from 'lodash'
import { Router } from "@angular/router";
import { getCurrentDebugContext } from "@angular/core/src/view/services";

/**
 * Describe differences between two object
 */
interface differences {
  /**
   * Only when two same prop have not same values
   */
  different: Array<string>,
  /**
   * Only missing properties from the first object
   */
  missing_from_first: Array<string>,
  /**
   * Only missing properties from the second object
   */
  missing_from_second: Array<string>
}

/**
 * Share variable and function commonly use in the app
 */
@Injectable()
export class CommonService {
  /**
   * Api URL
   */
  api: string
  /**
   * GraphQL URL
   */
  graphQL: string
  /**
   * Interval in ms between two refresh
   */
  refreshTokenInterval: number

  routeData

  /**
   * Instanciate all members
   */
  constructor(private router: Router){
    this.api = "http://localhost:3000"
    this.graphQL = this.api + '/graphql'
    this.refreshTokenInterval = 4000
    this.routeData = localStorage.getItem('routeData')
    
  }

  /**
   * Test equality objects 
   * @param {Object} obj1 First object
   * @param {Object} obj2 Second object
   * @returns {boolean} true if there's differences
   */
  equalityObjects(a,b){
    const differences = this.differences(a,b)
    const d = differences.different.length + differences.missing_from_first.length + differences.missing_from_second.length
    return  d===0 ? true :false 
  }

  /**
   * Load all
   * @param a 
   * @param b 
   * @returns {differences}
   */
  differences(a, b) {
    var result: differences = {
      different: [],
      missing_from_first: [],
      missing_from_second: []
    };

    _.reduce(a, (result, value, key) => {
      if (b.hasOwnProperty(key)) {
        if (_.isEqual(value, b[key])) return result;
        else {
          if (typeof (a[key]) != typeof ({}) || typeof (b[key]) != typeof ({})) {
            result.different.push(key);
            return result;
          } else {
            var deeper = this.differences(a[key], b[key]);
            result.different = result.different.concat(_.map(deeper.different, (sub_path) => key + "." + sub_path));
            result.missing_from_second = result.missing_from_second.concat(_.map(deeper.missing_from_second, (sub_path) => key + "." + sub_path));
            result.missing_from_first = result.missing_from_first.concat(_.map(deeper.missing_from_first, (sub_path) => key + "." + sub_path))
            return result;
          }
        }
      } else {
        result.missing_from_second.push(key);
        return result;
      }
    }, result);

    _.reduce(b, function (result, value, key) {
      if (a.hasOwnProperty(key)) return result;
      else {
        result.missing_from_first.push(key);
        return result;
      }
    }, result);
    return result;
  }


  /**
   * Wait function
   */
  wait(ms){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, ms);
    });
  }

  /**
   * Flat an object 
   */
  flatten(obj){
    const newObj = {}
    function flat(obj){
      Object.keys(obj).map(key => {
        if(typeof obj[key] === "object") flat(obj[key])
        else newObj[key]=obj[key]
      })
    }
    flat(obj)
    return newObj
  }

  /**
   * stringifyWithoutPropertiesQuote
   */
  stringifyWithoutPropertiesQuote(obj){
    return JSON.stringify(obj)
            .replace(/\\"/g, "\uFFFF")
            .replace(/\"([^"]+)\":/g, "$1:")
            .replace(/\uFFFF/g, "\\\"");
  }
}