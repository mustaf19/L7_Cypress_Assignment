Feature: iframe Text Editor
    Scenario Outline: Delete, Format and Edit text in iframe text editor
        Given A iframe embedded text editor
        When A user do "<bold>", do "<italic>" and edit "<text>"
        Then The text is changed as per the user "<text>","<bold>" and "<italic>"

    Examples:
        | text | bold | italic |
        | hello | true | false |
        | How are you? | false | true |
        | Are u fine?| true | true |


