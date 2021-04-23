export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6082da994879804a1f006c6c',
                  title: 'Sanity Studio',
                  name: 'amcollab-2-0-studio',
                  apiId: '5fabbd0e-ddbe-439e-aeaf-f46cc369684b'
                },
                {
                  buildHookId: '6082da996d91115b3a8397f9',
                  title: 'Portfolio Website',
                  name: 'amcollab-2-0',
                  apiId: 'a2944fff-9c57-4700-9640-acae1a2b5124'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/amoton/amcollab_2-0',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://amcollab-2-0.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
