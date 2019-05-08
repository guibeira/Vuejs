<template>
	<v-app>
		<v-navigation-drawer app>
			<v-toolbar flat>
				<v-list>
					<v-list-tile>
						<v-list-tile-title class="title">
							Menu
						</v-list-tile-title>
					</v-list-tile>
				</v-list>
			</v-toolbar>

			<v-divider></v-divider>
			<dashboard></dashboard>
		</v-navigation-drawer>

		<v-toolbar app>
			<v-toolbar-title class="headline text-uppercase">
				<span>Desafio</span>
				<span class="font-weight-light">Componente</span>
			</v-toolbar-title>
		</v-toolbar>

		<v-content>
			<carrosel></carrosel>
		</v-content>

		<v-footer class="pa-3" app>
			<v-spacer></v-spacer>
			<div>Curso Vue &copy; {{ new Date().getFullYear() }}</div>
		</v-footer>
	</v-app>
</template>

<script>
export default {
}
</script>
