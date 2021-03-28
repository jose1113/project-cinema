<template>
<div>
  <b-navbar class="nav" toggleable="lg" type="dark">
    <b-navbar-brand href="/">Cinema</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-nav-item href="#">Lançamentos</b-nav-item>
    <b-nav-item href="#">Em breve</b-nav-item>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder=""></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Pesquisar</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<style scoped>
.dropdown{
  text-decoration: none;
  list-style: none;
  color: white;
}
.nav{
  background-color: #af0404;
}
::v-deep .nav-link {
   color: white!important;
}
</style>
