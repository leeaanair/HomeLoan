import { Customer } from './customer';
import { Loan } from './loan';
import { EmploymentDetails } from './employmentDetails';
import { PropertyDetails } from './propertyDetails';
import { EmbeddedKey } from './embeddedKey';
 

//created a class which will have all other objects 
export class Application {

	customer : Customer;
	loan : Loan;
	employmentDetails : EmploymentDetails;
	propertyDetails : PropertyDetails;
	embeddedKey : EmbeddedKey;

}
