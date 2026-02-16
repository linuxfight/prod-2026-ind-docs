// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'LOTTY A/B Platform',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Context & Goals', link: '/explained/01_context/' },
						{ label: 'Implementation Plan', link: '/explained/implementation_plan/' },
					],
				},
				{
					label: 'Core Functionality',
					items: [
						{ label: 'Roles & Access', link: '/explained/02_roles_and_access/' },
						{ label: 'Feature Flags', link: '/explained/03_feature_flags/' },
						{ label: 'Experiments', link: '/explained/04_experiments/' },
						{ label: 'Runtime Decide API', link: '/explained/05_runtime_decide/' },
						{ label: 'Events & Ingestion', link: '/explained/06_events/' },
						{ label: 'Reports & Analytics', link: '/explained/07_reports/' },
						{ label: 'Guardrails', link: '/explained/08_guardrails/' },
					],
				},
				{
					label: 'Extensions (Part C)',
					collapsed: true,
					items: [
						{ label: 'Notifications', link: '/explained/09_notifications/' },
						{ label: 'Insights UI', link: '/explained/10_insights_ui/' },
						{ label: 'Learnings Library', link: '/explained/11_learnings_library/' },
						{ label: 'Autopilot', link: '/explained/12_autopilot/' },
						{ label: 'Conflict Resolution', link: '/explained/13_conflicts/' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Deliverables', link: '/explained/14_deliverables/' },
						{ label: 'Evaluation Criteria', link: '/explained/criteria/' },
						{ label: 'Glossary', link: '/explained/15_glossary/' },
					],
				},
			],
		}),
	],
});
