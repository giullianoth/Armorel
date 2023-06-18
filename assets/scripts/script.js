import { getById } from "../../app/get.js";
import { ProductTemplate } from "./template/product.js";
import { getElement } from "./variables.js";
import { DropdownMenu, MobileMenu } from "./viewport/menu.js"

MobileMenu()
DropdownMenu()

getElement(".j_releases").append(ProductTemplate(getById(1, "product")), 
ProductTemplate(getById(2, "product")))