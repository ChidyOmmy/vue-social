<template>
	<div id="WhatsappChat">
		<v-container>
			<v-row>
				<v-col cols-md="7" offset-md="2" fixed>
					<v-app-bar class="mr-0 mb-12" fixed color="teal darken-2" dark>
						<v-btn icon to="/">
							<v-icon>mdi-arrow-left</v-icon>
						</v-btn>
						<v-list-item two-lines class="mr-0">
							<v-list-item-avatar>
								<v-avatar>
									<v-icon x-large>mdi-account-circle</v-icon>
								</v-avatar>
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title>Chidy</v-list-item-title>
								<v-list-item-subtitle v-if="status" :class="status == 'typing..' ? 'cyan--text' : 'white--text' ">{{ status }}</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
						<v-spacer></v-spacer>
						<v-btn icon>
							<v-icon medium>mdi-video</v-icon>
						</v-btn>
						<v-btn icon>
							<v-icon>mdi-phone</v-icon>
						</v-btn>
						<v-btn icon>
							<v-icon>mdi-dots-vertical</v-icon>
						</v-btn>
					</v-app-bar>
					<v-scroll-y-reverse-transition transition="scroll-y-reverse-transition">
						<div class="messagebody">
							<v-scroll-y-reverse-transition group>
								<div v-for="message in messages" :key="message.id">
									<v-card max-width="200" dense class="incomming pa-1 ma-1" v-if="message.inbox" transition="scroll-y-transition">
										<v-card-text class="pa-0">
											{{ message.text }}
										</v-card-text>
										<v-card-actions class="pa-0 ma-0">
											<v-spacer></v-spacer>
											<small>{{ message.time }}</small>
										</v-card-actions>
									</v-card>
									<v-card color="green accent-2" max-width="200" dense class="outgoing pa-1 ma-1" transition="scroll-y-transition" v-if="!message.inbox">
										<v-card-text class="pa-0">
											{{ message.text }}
										</v-card-text>
										<v-card-actions class="pa-0 ma-0">
											<v-spacer></v-spacer>
											<v-card-subtitle class="pa-0">
												<small>{{ message.time }}</small>
											</v-card-subtitle>
											<v-icon small :color="message.read ? 'info' : 'grey' ">mdi-check-all</v-icon>
										</v-card-actions>
									</v-card>
								</div>
							</v-scroll-y-reverse-transition>
						</div>
					</v-scroll-y-reverse-transition>
					<v-footer dense color="white" elevation="1" fixed class="mt-12">
						<v-textarea dense max-height="16px" class="pa-1" outlined rounded rows="1"
							v-model="newmessage"
							@click:append-outer="send"
							grow prepend-icon="mdi-paperclip" append-icon="mdi-camera" :append-outer-icon="newmessage ? 'mdi-send' : 'mdi-microphone' "></v-textarea>
					</v-footer>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
	import {
		mapGetters
	} from 'vuex';
	export default {
		name: 'WhatsappChat',
		data() {
			return {
				newmessage: '',
				reply: '',
				status: 'online',
				messages: [{
					id: 0,
					text: 'Hey',
					time: '11:49',
					inbox: false,
					read: true
				},
					{
						id: 1,
						text: 'Hi',
						time: '11:50',
						inbox: true,
						read: true
					},
				]
			}
		},
		methods: {
			receive: function () {
				const id = this.messages.length
				const hour = new Date().getHours()
				const min = new Date().getMinutes()
				const time = `${hour}:${min}`
				let message = {
					id,
					time,
					text: this.reply,
					inbox: true,
					read: true
				}
				this.messages.push(message)
				this.status = 'online'
			},
			send: function () {
				const id = this.messages.length
				const hour = new Date().getHours()
				const min = new Date().getMinutes()
				const time = `${hour}:${min}`
				const	text = this.newmessage
				let message = {
					id,
					time,
					text,
					inbox: false,
					read: false
				}
				const read = () => {
					message.read = true
					this.status = 'typing..'
				}
				this.messages.push(message)
				this.reply = this.newmessage
				setTimeout(read, 1000)
				setTimeout(this.receive, 1500)
				this.newmessage = ''
			}
		},
		computed: mapGetters(['user'])
	}
	</script>
	<style scoped>
		.outgoing {
			position: relative;
			left: 30%;
		}
		.messagebody {
			padding-top: 60px;
			padding-bottom: 100px;
		}
	</style>