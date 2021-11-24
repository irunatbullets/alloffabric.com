<template>
  <div>

    <hero
      title="Welcome to All of Fabric"
      text="Lorem tempor amet cillum veniam est culpa cupidatat dolore aliqua veniam officia veniam. Duis commodo dolor eu ea do deserunt id mollit officia non voluptate magna. Deserunt excepteur tempor pariatur amet culpa non deserunt minim in est magna nisi ex minim. Laborum nisi ex ullamco esse laboris laborum tempor. Incididunt labore culpa voluptate cupidatat ullamco laboris nisi."
      :link="{
        text: 'Join us',
        url: 'https://discord.gg/6rkdm48'
      }"
    />

    <pips />

    <div>

      basic layout
      --------------------------------------------------------------------------
        --color
        --arrangement

        title block
          intro
          text
          button

        image

        sections
          title
          text
          buttons
          image

      FAQ
      --------------------------------------------------------------------------
        --color

        title block
          intro
          text
          button

        faq area



      <div>
        <h1>Our community</h1>
        <p class="intro">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
        <p>Lorem tempor amet cillum veniam est culpa cupidatat dolore aliqua veniam officia veniam. Duis commodo dolor eu ea do deserunt id mollit officia non voluptate magna. Deserunt excepteur tempor pariatur amet culpa non deserunt minim in est magna nisi ex minim. Laborum nisi ex ullamco esse laboris laborum tempor. Incididunt labore culpa voluptate cupidatat ullamco laboris nisi.</p>
      </div>

      <div>
        <h2>Need help?</h2>
        <p>Lorem tempor amet cillum veniam est culpa cupidatat dolore aliqua veniam officia veniam. Duis commodo dolor eu ea do deserunt id mollit officia non voluptate magna. Deserunt excepteur tempor pariatur amet culpa non deserunt minim in est magna nisi ex minim. Laborum nisi ex ullamco esse laboris laborum tempor. Incididunt labore culpa voluptate cupidatat ullamco laboris nisi.</p>
        <p><action href="#">Check the FAQ</action></p>
      </div>

      <div>
        <h2>24/7 on Discord</h2>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
        <p><action href="#">Join us</action></p>
      </div>

    </div>



  </div>
</template>

<script>

export default {
  data () {
    return {
      welcomeSection: {
        title: 'Welcome to All of Fabric',
        text: 'Lorem tempor amet cillum veniam est culpa cupidatat dolore aliqua veniam officia veniam. Duis commodo dolor eu ea do deserunt id mollit officia non voluptate magna. Deserunt excepteur tempor pariatur amet culpa non deserunt minim in est magna nisi ex minim. Laborum nisi ex ullamco esse laboris laborum tempor. Incididunt labore culpa voluptate cupidatat ullamco laboris nisi.',
        link: {
          text: 'Join us',
          url: 'https://discord.gg/6rkdm48'
        },
      },
      statsData: [
        {
          title: '10k+',
          text: 'Active players in our community',
        },
        {
          title: '200k+',
          text: 'AOF players and going up every day',
        },
        {
          title: '<4min',
          text: 'Less than 4 minutes for the pack to load'
        },
        {
          title: '4GB',
          text: '4GB of Ram is all you need for fluid gameplay (even with SHADERS!)'
        }
      ]
    }
  }
}
</script>
