import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { NoRecipeComponent } from './recipe-book/no-recipe/no-recipe.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipe-book/recipes-resolver.service';


const routes: Routes = [
  {path: "", redirectTo: "/recipes", pathMatch: "full"},
  {path: "recipes", component: RecipeBookComponent, children: [
    {path: "", component: NoRecipeComponent, pathMatch: "full", resolve: [RecipesResolverService]},
    {path: "new", component: RecipeEditComponent},
    {path: ":id", component: RecipeDetailComponent, resolve: [RecipesResolverService]},
    {path: ":id/edit", component: RecipeEditComponent, resolve: [RecipesResolverService]},
  ]},
  {path: "shopping-list", component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
