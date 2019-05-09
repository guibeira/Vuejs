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
			<dashboard/>
		</v-navigation-drawer>

		<v-toolbar app>
			<v-toolbar-title class="headline text-uppercase">
				<span>Desafio</span>
				<span class="font-weight-light">Componente</span>
			</v-toolbar-title>
		</v-toolbar>

		<v-content>
			<carrosel/>
		</v-content>
		<app-footer/>
	</v-app>
</template>

<script>
import Footer from './components/template/Footer.vue'
export default {
	components : {appFooter: Footer}
}
</script>
